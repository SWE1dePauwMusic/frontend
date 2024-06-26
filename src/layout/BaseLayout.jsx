import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
const BaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <Sidebar />
      {/* right side/content of the page */}
      <div className="content-wrapper">
      <Navbar />
      </div>
    </main>
  );
};

export default BaseLayout;