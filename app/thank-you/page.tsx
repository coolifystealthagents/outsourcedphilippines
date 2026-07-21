import { Header, Footer } from '../components';

export const metadata = { title: 'Role brief received' };

export default function Thanks() {
  return <><Header /><main className="thanks-page"><div className="thanks-card"><span>Role brief received</span><h1>Your task list is in the right place.</h1><p>A Philippines staffing partner may follow up to clarify the work, hours, tools, and approval limits. Any talent discussed will be based in the Philippines.</p><a className="btn primary" href="/">Back to the role desk</a></div></main><Footer /></>;
}
