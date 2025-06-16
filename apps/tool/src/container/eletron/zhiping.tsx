import { Input } from '@ui/input';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 定义定频空调表单验证Schema
// eslint-disable-next-line react-refresh/only-export-components
export const fixedAcSchema = z.object({
  inputPower: z
    .number({ required_error: '请输入输入功率' })
    .min(100, '输入功率至少为100W')
    .max(10000, '输入功率不应超过10000W'),
  coolingCapacity: z
    .number({ required_error: '请输入制冷量' })
    .min(500, '制冷量至少为500W'),
  useHours: z
    .number({ required_error: '请输入使用时长' })
    .min(0.1, '使用时长至少为0.1小时'),
  days: z
    .number({ required_error: '请输入使用天数' })
    .min(1, '使用天数至少为1天')
    .max(365, '使用天数不应超过365天'),
  hoursPerDay: z
    .number({ required_error: '请输入每天使用小时数' })
    .min(0.5, '每天使用时长至少为0.5小时')
    .max(24, '每天使用时长不应超过24小时'),
  electricityRate: z
    .number({ required_error: '请输入电费单价' })
    .min(0.1, '电费单价至少为0.1元/kWh'),
});

// 定义定频空调表单数据类型
export type FixedAcFormData = z.infer<typeof fixedAcSchema>;

interface ZhiPingProps {
  onCalculate: (result: number, monthlyResult: number) => void;
}

export function ZhiPing({ onCalculate }: ZhiPingProps) {
  // 设置react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FixedAcFormData>({
    resolver: zodResolver(fixedAcSchema),
    defaultValues: {
      inputPower: 1445,
      coolingCapacity: 5050,
      useHours: 8,
      days: 30,
      hoursPerDay: 8,
      electricityRate: 0.55,
    },
    mode: 'onChange',
  });

  // 实时计算能效比
  const watchInputPower = watch('inputPower');
  const watchCoolingCapacity = watch('coolingCapacity');
  const efficiencyRatio =
    watchInputPower && watchCoolingCapacity
      ? (watchCoolingCapacity / watchInputPower).toFixed(2)
      : '0.00';

  // 处理表单提交
  const onSubmit = (data: FixedAcFormData) => {
    // 定频空调：直接使用输入功率计算
    // 输入功率(W) × 使用时间(h) / 1000 = 耗电量(kWh)
    const consumption = (data.inputPower * data.useHours) / 1000;
    const result = Number(consumption.toFixed(2));

    // 计算月度电费
    const monthlyConsumption = consumption * data.days;
    const monthlyResult = Number(
      (monthlyConsumption * data.electricityRate).toFixed(2)
    );

    // 回调返回计算结果
    onCalculate(result, monthlyResult);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <label className='block text-sm font-medium mb-1'>输入功率 (W)</label>
        <Controller
          name='inputPower'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='number'
              min='100'
              step='10'
              className={`w-full border rounded p-2 ${
                errors.inputPower ? 'border-red-500' : ''
              }`}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          )}
        />
        {errors.inputPower && (
          <p className='text-red-500 text-xs mt-1'>
            {errors.inputPower.message}
          </p>
        )}
        <p className='text-xs text-gray-500 mt-1'>
          参考：定频空调铭牌上的"输入功率"数值
        </p>
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>制冷量 (W)</label>
        <Controller
          name='coolingCapacity'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='number'
              min='100'
              step='10'
              className={`w-full border rounded p-2 ${
                errors.coolingCapacity ? 'border-red-500' : ''
              }`}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          )}
        />
        {errors.coolingCapacity && (
          <p className='text-red-500 text-xs mt-1'>
            {errors.coolingCapacity.message}
          </p>
        )}
        <p className='text-xs text-gray-500 mt-1'>
          参考：定频空调铭牌上的"制冷量"数值
        </p>
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>能效比</label>
        <Input
          type='text'
          value={efficiencyRatio}
          disabled
          className='w-full border rounded p-2 bg-gray-50'
        />
        <p className='text-xs text-gray-500 mt-1'>
          自动计算：制冷量 ÷ 输入功率
        </p>
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>
          使用时长 (小时)
        </label>
        <Controller
          name='useHours'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='number'
              min='0.5'
              step='0.5'
              className={`w-full border rounded p-2 ${
                errors.useHours ? 'border-red-500' : ''
              }`}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          )}
        />
        {errors.useHours && (
          <p className='text-red-500 text-xs mt-1'>{errors.useHours.message}</p>
        )}
      </div>

      <div className='border-t pt-4'>
        <h3 className='font-medium mb-2'>使用周期设置</h3>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium mb-1'>使用天数</label>
            <Controller
              name='days'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type='number'
                  min='1'
                  max='365'
                  className={`w-full border rounded p-2 ${
                    errors.days ? 'border-red-500' : ''
                  }`}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              )}
            />
            {errors.days && (
              <p className='text-red-500 text-xs mt-1'>{errors.days.message}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>
              每天使用小时
            </label>
            <Controller
              name='hoursPerDay'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type='number'
                  min='1'
                  max='24'
                  className={`w-full border rounded p-2 ${
                    errors.hoursPerDay ? 'border-red-500' : ''
                  }`}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              )}
            />
            {errors.hoursPerDay && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.hoursPerDay.message}
              </p>
            )}
          </div>

          <div className='col-span-2'>
            <label className='block text-sm font-medium mb-1'>
              电费单价 (元/kWh)
            </label>
            <Controller
              name='electricityRate'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type='number'
                  min='0.1'
                  step='0.01'
                  className={`w-full border rounded p-2 ${
                    errors.electricityRate ? 'border-red-500' : ''
                  }`}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              )}
            />
            {errors.electricityRate && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.electricityRate.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <button
        type='submit'
        className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
      >
        计算
      </button>
    </form>
  );
}
