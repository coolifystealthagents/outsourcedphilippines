import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('blog','philippines-outsourcing-intake-source-register');
export default function Page(){return renderAug19Article('blog','philippines-outsourcing-intake-source-register')}
