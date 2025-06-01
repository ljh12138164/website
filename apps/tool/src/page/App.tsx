import { useState } from 'react';
import { ZhiPing } from '../container/eletron/zhiping';
import { BianPing } from '../container/eletron/bianping';

function App() {
  const [type, setType] = useState('fixed'); // 'fixed'(定频) 或 'variable'(变频)
  const [result, setResult] = useState(0); // 计算结果
  const [monthlyResult, setMonthlyResult] = useState(0); // 月度电费结果

  // 计算结果回调函数
  const handleCalculateResult = (result: number, monthlyResult: number) => {
    setResult(result);
    setMonthlyResult(monthlyResult);
  };

  return (
    <div className='p-4 max-w-md mx-auto h-[calc(100vh-100px)]'>
      <section className='bg-white p-4 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-4'>空调功耗计算</h2>

        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>空调类型</label>
            <div className='flex gap-4'>
              <label className='flex items-center'>
                <input
                  type='radio'
                  name='type'
                  checked={type === 'fixed'}
                  onChange={() => setType('fixed')}
                  className='mr-2'
                />
                定频空调
              </label>
              <label className='flex items-center'>
                <input
                  type='radio'
                  name='type'
                  checked={type === 'variable'}
                  onChange={() => setType('variable')}
                  className='mr-2'
                />
                变频空调
              </label>
            </div>
          </div>

          {type === 'fixed' ? (
            <ZhiPing onCalculate={handleCalculateResult} />
          ) : (
            <BianPing onCalculate={handleCalculateResult} />
          )}

          <div className='mt-4 p-3 bg-gray-50 rounded'>
            <div className='text-center'>
              <div className='mb-2'>
                <span className='font-medium'>耗电量: </span>
                <span className='text-xl font-bold'>{result}</span>
                <span className='ml-1'>度 (kWh)</span>
              </div>

              <div>
                <span className='font-medium'>预计月电费: </span>
                <span className='text-xl font-bold text-red-500'>
                  {monthlyResult}
                </span>
                <span className='ml-1'>元</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
