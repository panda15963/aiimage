import { useState, useEffect, useCallback } from "react";
import { QuoationService } from "node-upbit";
import {
  ICandleDayReturnProps,
  ICandleWeekReturnProps,
  ITickerProps,
  ICandlesMonthReturnProps,
} from "node-upbit/lib/@types/quotation";
import error from "next/error";

interface IData {
  minutesDataforDay: ICandleDayReturnProps[];
  minutesDataforWeek: ICandleWeekReturnProps[];
  dayData: ICandlesMonthReturnProps[];
  weekData: ICandleWeekReturnProps[];
  ticker: ITickerProps;
}

interface IUseFetchDataProps {
  marketCoin: string;
}

export const useFetchData = ({ marketCoin }: IUseFetchDataProps) => {
  const [data, setData] = useState<IData>({
    minutesDataforDay: [],
    minutesDataforWeek: [],
    dayData: [],
    weekData: [],
    ticker: {
      market: "",
      trade_date: "",
      trade_time: "",
      trade_date_kst: "",
      trade_time_kst: "",
      trade_timestamp: 0,
      opening_price: 0,
      high_price: 0,
      low_price: 0,
      trade_price: 0,
      prev_closing_price: 0,
      change: "",
      change_price: 0,
      change_rate: 0,
      signed_change_price: 0,
      signed_change_rate: 0,
      trade_volume: 0,
      acc_trade_price: 0,
      acc_trade_price_24h: 0,
      acc_trade_volume: 0,
      acc_trade_volume_24h: 0,
      highest_52_week_price: 0,
      highest_52_week_date: "",
      lowest_52_week_price: 0,
      lowest_52_week_date: "",
      timestamp: 0,
    },
  });
  const [loading, setLoading] = useState(true);


  const fetchData = useCallback(async () => {
    const quoationService = new QuoationService();
    try {
      const dayCandles = await quoationService.getDayCandles({
        marketCoin,
        count:
          new Date().getDay() === 0 ? 8 : new Date().getDay() === 6 ? 9 : 7,
      });

      const weekCandles = await quoationService.getWeekCandles({
        marketCoin,
        count: new Date().getDay() === 0 ? 8 : new Date().getDay(),
      });

      const monthCandles = await quoationService.getMonthCandles({
        marketCoin,
        count: new Date().getMonth(),
      });

      const yearCandles = await quoationService.getMonthCandles({
        marketCoin,
        count: new Date().getFullYear(),
      });

      setData({
        minutesDataforDay: dayCandles,
        minutesDataforWeek: weekCandles,
        dayData: monthCandles,
        weekData: yearCandles,
        ticker: (await quoationService.getTicker([marketCoin]))[0],
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [marketCoin]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};
