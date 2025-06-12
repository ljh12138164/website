import { genConfig, genRequse } from '@workspace/lib';
const config = genConfig(process.env.PUBLIC_NEXT_BASE_URL!);
const http = genRequse(config);

export default http;
