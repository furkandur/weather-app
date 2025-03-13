import { JSX } from '@emotion/react/jsx-runtime';
import { Box, styled } from '@mui/material';
import { CurrentWeatherData } from '../types';
import { useEffect, useState } from 'react';

const VideoBackground = styled('video')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
  filter: 'blur(5px)',
  scale: '1.1',
});

const getWeatherVideo = (weatherCode: number) => {
  const videos = {
    sunny: [1000],
    cloudy: [1003, 1006],
    overcast: [1009],
    foggy: [1030, 1135, 1147],
    light_rain: [
      1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1249, 1069,
      1204, 1207,
    ],
    heavy_rain: [1186, 1189, 1192, 1195, 1243, 1246, 1273, 1276, 1087],
    light_snow: [1066, 1114, 1210, 1213, 1255, 1072, 1237, 1261],
    heavy_snow: [1117, 1216, 1219, 1222, 1225, 1258, 1264, 1279, 1282],
  };

  for (const [category, codes] of Object.entries(videos)) {
    if (codes.includes(weatherCode)) {
      return category;
    }
  }

  return 'light_rain';
};

interface Props {
  weather: CurrentWeatherData | undefined;
  children?: JSX.Element | JSX.Element[];
}

const BackgroundVideo = ({ weather, children }: Props) => {
  const [video, setVideo] = useState('');
  useEffect(() => {
    if (weather) {
      const videoToSet = getWeatherVideo(weather.condition.code);
      setVideo(videoToSet);
    }
  }, [weather]);
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <VideoBackground autoPlay muted loop playsInline key={video}>
        <source src={`/videos/${video}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      {children}
    </Box>
  );
};

export default BackgroundVideo;
