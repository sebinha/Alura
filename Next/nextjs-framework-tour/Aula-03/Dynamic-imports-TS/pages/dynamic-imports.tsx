import dynamic from 'next/dynamic';
import { JSX,useState } from 'react';
// import YouTubeVideo from '../components/DynamicVideo';

const YouTubeVideo = dynamic(() => import('../components/DynamicVideo'));

export default function DynamicImportPage(): JSX.Element {
  const [isVisible, setVideoStatus] = useState(false);
  return (
    <div>
      <p>
        Mostrar Vídeo
        <input
          type="checkbox"
          onChange={() => {
            setVideoStatus(!isVisible);
          }}
        />
      </p>
      {isVisible && <YouTubeVideo />}      
    </div>
  )
}