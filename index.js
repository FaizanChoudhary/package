import React, {useState} from 'react';
// import Video from 'react-native-video';
import Document from './screens/Document';
import Liveness from './screens/Liveness';

export default function ExpertsSdk() {
  const [flow, setFlow] = useState('ScanDocument');

  return flow === 'ScanDocument' ? (
    <Document setFlow={setFlow} />
  ) : (
    <Liveness />
  );
}
