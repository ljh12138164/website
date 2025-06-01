import { Input } from '@workspace/ui/components/input';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 定义变频空调表单验证Schema
export const variableAcSchema = z.object({
  energyEfficiency: z
    .number({ required_error: '请输入全年能源消耗效率' })
    .min(1, '能效比至少为1'),
  ratedCoolingPower: z
    .number({ required_error: '请输入额定制冷量' })
    .min(100, '额定制冷量至少为100W'),
  ratedHeatingPower: z
    .number({ required_error: '请输入额定制热量' })
    .min(100, '额定制热量至少为100W'),
  coolingPower: z
    .number({ required_error: '请输入制冷季节耗电量' })
    .min(1, '制冷季节耗电量至少为1kW·h'),
  heatingPower: z
    .number({ required_error: '请输入制热季节耗电量' })
    .min(1, '制热季节耗电量至少为1kW·h'),
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

// 定义变频空调表单数据类型
export type VariableAcFormData = z.infer<typeof variableAcSchema>;

interface BianPingProps {
  onCalculate: (result: number, monthlyResult: number) => void;
}

export function BianPing({ onCalculate }: BianPingProps) {
  // 设置react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VariableAcFormData>({
    resolver: zodResolver(variableAcSchema),
    defaultValues: {
      energyEfficiency: 5.21,
      coolingPower: 357,
      heatingPower: 285,
      ratedCoolingPower: 3500,
      ratedHeatingPower: 5000,
      days: 30,
      hoursPerDay: 8,
      electricityRate: 0.55,
    },
    mode: 'onChange',
  });

  // 处理表单提交
  const onSubmit = (data: VariableAcFormData) => {
    // 变频空调：根据季节使用不同的计算方式
    // 这里简化计算，按照每天使用时长占比计算
    const dailyRatio = data.hoursPerDay / 24;

    // 日均耗电量 = (制冷季节耗电量 + 制热季节耗电量) × 日使用比例 / 365
    const dailyConsumption =
      ((data.coolingPower + data.heatingPower) * dailyRatio) / 365;

    // 月度耗电量
    const monthlyConsumption = dailyConsumption * data.days;
    const result = Number(monthlyConsumption.toFixed(2));

    // 计算月度电费
    const monthlyResult = Number(
      (monthlyConsumption * data.electricityRate).toFixed(2)
    );

    // 回调返回计算结果
    onCalculate(result, monthlyResult);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <label className='block text-sm font-medium mb-1'>
          全年能源消耗效率
        </label>
        <Controller
          name='energyEfficiency'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='number'
              min='1'
              step='0.01'
              className={`w-full border rounded p-2 ${
                errors.energyEfficiency ? 'border-red-500' : ''
              }`}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          )}
        />
        {errors.energyEfficiency && (
          <p className='text-red-500 text-xs mt-1'>
            {errors.energyEfficiency.message}
          </p>
        )}
        <p className='text-xs text-gray-500 mt-1'>
          参考：变频空调能效标识上的"全年能源消耗效率"
        </p>
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>额定制冷量 (W)</label>
        <Controller
          name='ratedCoolingPower'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='number'
              min='100'
              step='100'
              className={`w-full border rounded p-2 ${
                errors.ratedCoolingPower ? 'border-red-500' : ''
              }`}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          )}
        />
        {errors.ratedCoolingPower && (
          <p className='text-red-500 text-xs mt-1'>
            {errors.ratedCoolingPower.message}
          </p>
        )}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>额定制热量 (W)</label>
        <Controller
          name='ratedHeatingPower'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='number'
              min='100'
              step='100'
              className={`w-full border rounded p-2 ${
                errors.ratedHeatingPower ? 'border-red-500' : ''
              }`}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          )}
        />
        {errors.ratedHeatingPower && (
          <p className='text-red-500 text-xs mt-1'>
            {errors.ratedHeatingPower.message}
          </p>
        )}
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>
          制冷季节耗电量 (kW·h)
        </label>
        <Controller
          name='coolingPower'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='number'
              min='1'
              step='1'
              className={`w-full border rounded p-2 ${
                errors.coolingPower ? 'border-red-500' : ''
              }`}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          )}
        />
        {errors.coolingPower && (
          <p className='text-red-500 text-xs mt-1'>
            {errors.coolingPower.message}
          </p>
        )}
        <p className='text-xs text-gray-500 mt-1'>
          参考：变频空调能效标识上的"制冷季节耗电量"
        </p>
      </div>

      <div>
        <label className='block text-sm font-medium mb-1'>
          制热季节耗电量 (kW·h)
        </label>
        <Controller
          name='heatingPower'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='number'
              min='1'
              step='1'
              className={`w-full border rounded p-2 ${
                errors.heatingPower ? 'border-red-500' : ''
              }`}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          )}
        />
        {errors.heatingPower && (
          <p className='text-red-500 text-xs mt-1'>
            {errors.heatingPower.message}
          </p>
        )}
        <p className='text-xs text-gray-500 mt-1'>
          参考：变频空调能效标识上的"制热季节耗电量"
        </p>
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
