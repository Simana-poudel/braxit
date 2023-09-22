
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
});



const MapComponent = () => {
  return (
    <div >
      <DynamicMap />
    </div>
  );
}

export default MapComponent;
