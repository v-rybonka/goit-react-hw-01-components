import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #e2e9f2;
  width: 500px;
  margin: 0 auto;
  padding: 30px;
  margin-bottom: 30px;
`;
export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
`;

export const StatisticsItem = styled.li`
  padding: 15px;
  border: 1px solid black;
  background-color: #a7bed9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StatisticsTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
`;

export const StatisticsLabel = styled.span`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
export const StatisticsPercentage = styled.span`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
