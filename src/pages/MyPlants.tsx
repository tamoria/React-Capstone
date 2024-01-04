import PlantList from '../components/PlantList';
import BackgroundImage from '../assets/images/moreleaves.avif';

function MyPlants() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
      }}
    >
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <PlantList />
      </div>
    </div>
  );
}

export default MyPlants;
