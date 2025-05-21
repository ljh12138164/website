import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

// 创建请求类型
interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
  showLoading?: boolean;
}

// 拦截器接口
interface RequestInterceptors {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: <T = AxiosResponse>(response: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

// 响应数据的接口
interface ResponseData<T> {
  code: number;
  data: T;
  message: string;
}

// 封装的请求类
class Request {
  // axios实例
  instance: AxiosInstance;
  // 拦截器对象
  interceptors?: RequestInterceptors;
  // 控制是否显示加载
  showLoading: boolean;

  constructor(config: RequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);

    // 保存基本信息
    this.interceptors = config.interceptors;
    this.showLoading = config.showLoading ?? false;

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 添加所有实例都有的拦截器
    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        // 可以在这里添加token
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截
    this.instance.interceptors.response.use(
      (response) => {
        // 直接返回响应数据
        return response.data;
      },
      (error) => {
        // 处理错误状态码
        if (error.response) {
          switch (error.response.status) {
            case 400:
              console.error('请求错误');
              break;
            case 401:
              console.error('未授权访问');
              // 可以在这里处理登出逻辑
              break;
            case 403:
              console.error('拒绝访问');
              break;
            case 404:
              console.error('请求地址出错');
              break;
            case 500:
              console.error('服务器内部错误');
              break;
            default:
              console.error(`连接错误${error.response.status}`);
          }
        } else {
          console.error('网络连接异常,请稍后再试!');
        }

        return Promise.reject(error);
      }
    );
  }

  // 封装请求方法
  request<T = any>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(
          config as InternalAxiosRequestConfig
        );
      }

      this.instance
        .request<any, T>(config)
        .then((response) => {
          // 单个响应的拦截器
          if (config.interceptors?.responseInterceptor) {
            response = config.interceptors.responseInterceptor(response);
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // GET请求
  get<T = any>(url: string, params?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, url, params, method: 'GET' });
  }

  // POST请求
  post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, url, data, method: 'POST' });
  }

  // PUT请求
  put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, url, data, method: 'PUT' });
  }

  // DELETE请求
  delete<T = any>(url: string, config?: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, url, method: 'DELETE' });
  }

  // PATCH请求
  patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, url, data, method: 'PATCH' });
  }
}

// 创建默认实例
const defaultConfig = {
  timeout: 10000,
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

// 导出请求实例
export const http = new Request(defaultConfig);

// 导出类，允许创建多个实例
export default Request;
