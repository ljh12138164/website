import FlowContainer from '@/components/flow-container';
import '@xyflow/react/dist/style.css';
import { getTranslations } from 'next-intl/server';

export const metadata = async () => {
  const t = await getTranslations();
  return {
    title: t('workflow.title'),
    description: t('workflow.description'),
  };
};

export default function Workflow() {
  return <FlowContainer />;
}
