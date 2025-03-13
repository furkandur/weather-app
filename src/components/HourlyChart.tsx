import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ForecastWeatherData, LocationWeatherData } from '../types';
import { Box, Paper, Tab, Tabs, useTheme } from '@mui/material';
import { useState } from 'react';

interface Props {
  location: LocationWeatherData;
  forecast: ForecastWeatherData;
}

const HourlyChart = ({ location, forecast }: Props) => {
  const [chartTab, setChartTab] = useState('temp');

  const now = new Date(location.localtime);

  let count = 24;
  const data: object[] = [];
  forecast.forecastday[0].hour.map(h => {
    const date = new Date(h.time);

    if (date > now) {
      const hour = date.getHours();
      data.push({
        Hour: hour,
        Temp: h.temp_c,
        RainRate: h.chance_of_rain,
        Humidity: h.humidity,
      });
      count--;
    }
  });

  if (count > 0) {
    forecast.forecastday[1].hour.map(h => {
      if (count > 0) {
        const date = new Date(h.time);
        const hour = date.getHours();
        data.push({
          Hour: hour,
          Temp: h.temp_c,
          RainRate: h.chance_of_rain,
          Humidity: h.humidity,
        });
        count--;
      }
    });
  }

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map(i => i.Temp));
    const dataMin = Math.min(...data.map(i => i.Temp));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  const theme = useTheme();

  const tooltipContentStyle: React.CSSProperties = {
    backgroundColor: theme.palette.background.paper,
    fontSize: '14px',
    padding: 10,
    border: '1px',
    borderRadius: 8,
  };

  const tooltipItemStyle: React.CSSProperties = {
    color: theme.palette.text.primary,
    fontSize: '14px',
  };

  const tempChart = (
    <AreaChart data={data} margin={{ left: 10, right: 10, top: 5, bottom: 5 }}>
      <defs>
        <linearGradient id="splitColor" x1={0} y1={0} x2={0} y2={1}>
          <stop
            offset={off}
            stopColor={theme.palette.primary.main}
            stopOpacity={1}
          />
          <stop
            offset={off}
            stopColor={theme.palette.secondary.main}
            stopOpacity={1}
          />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="Temp"
        stroke={theme.palette.primary.contrastText}
        fill="url(#splitColor)"
      />
      <XAxis dataKey="Hour" interval={1} />
      <Tooltip
        contentStyle={tooltipContentStyle}
        itemStyle={tooltipItemStyle}
        labelFormatter={(val: number) => `${val.toString()}h`}
      />
    </AreaChart>
  );

  const rainChart = (
    <LineChart data={data} margin={{ left: 10, right: 10, top: 5, bottom: 5 }}>
      <Line
        type="linear"
        dataKey="RainRate"
        stroke={theme.palette.text.primary}
      />
      <XAxis dataKey="Hour" interval={1} />
      <Tooltip
        contentStyle={tooltipContentStyle}
        itemStyle={tooltipItemStyle}
        labelFormatter={(val: number) => `${val.toString()}h`}
      />
    </LineChart>
  );

  const humidityChart = (
    <AreaChart data={data} margin={{ left: 10, right: 10, top: 5, bottom: 5 }}>
      <Area
        type="monotone"
        dataKey="Humidity"
        stroke={theme.palette.primary.contrastText}
        fill={theme.palette.primary.main}
      />
      <XAxis dataKey="Hour" interval={2} />
      <Tooltip
        contentStyle={tooltipContentStyle}
        itemStyle={tooltipItemStyle}
        labelFormatter={(val: number) => `${val.toString()}h`}
      />
    </AreaChart>
  );

  let renderChart;
  switch (chartTab) {
    case 'temp':
      renderChart = tempChart;
      break;
    case 'rain':
      renderChart = rainChart;
      break;
    case 'humidity':
      renderChart = humidityChart;
      break;
    default:
      renderChart = tempChart;
      break;
  }

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setChartTab(newValue);
  };

  return (
    <Paper variant="outlined" sx={{ p: { xs: 1, sm: 3 }, height: '100%' }}>
      <Tabs value={chartTab} onChange={handleTabChange}>
        <Tab value={'temp'} label="Temperature" />
        <Tab value={'rain'} label="Rain" />
        <Tab value={'humidity'} label="Humidity" />
      </Tabs>
      <Box marginTop={3}>
        <ResponsiveContainer width="100%" aspect={3.5}>
          {renderChart}
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default HourlyChart;
