'use client'
import Timeago from 'react-timeago';

type Props = {
    time: string;
};

const LiveTimeStamp = ({time}: Props) => {
  return (
    <Timeago date={time}/>
  )
}

export default LiveTimeStamp;