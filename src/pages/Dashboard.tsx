import DataTable from '../components/DataTable';
import BackgroundImage from '../assets/images/closeup.avif';

function Dashboard() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
      }}
    >
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <DataTable />
      </div>
    </div>
  );
}

export default Dashboard;