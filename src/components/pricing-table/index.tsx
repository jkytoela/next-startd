import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const PricingTable = () => {
  const [pickupLocation, setPickupLocation] = useState(``);
  const [deliveryLocation, setDeliveryLocation] = useState(``);
  const [truckSize, setTruckSize] = useState(``);
  const [truckType, setTruckType] = useState(``);
  const [distanceText, setDistanceText] = useState(``);
  const [fare, setFare] = useState(0);
  const [lowerFare, setLowerFare] = useState(0);
  const [time, setTime] = useState(``);

  const pickupLocationHandler = (e: any) => setPickupLocation(e.target.value);
  const deliveryLocationHandler = (e: any) => setDeliveryLocation(e.target.value);
  const truckSizeHandler = (e: any) => setTruckSize(e.target.value);
  const truckTypeHandler = (e: any) => setTruckType(e.target.value);

  const onSendHandler = async () => {
    try {
      const response = await axios.post(`https://get-fare-flask-api.herokuapp.com/get_fare_from_locations`, {
        origin: pickupLocation,
        destination: deliveryLocation,
        vehicle_size: truckSize,
        vehicle_type: truckType,
      });
      if (response.status === 200) {
        const resData = await response.data;
        setDistanceText(resData.distance_text);
        setFare(resData.fare);
        setLowerFare(resData.lower_fare);
        setTime(resData.time);
        console.log(response.data);
      }
    } catch (err) {
      console.log(`エラーです`);
      console.log(err);
    }
  };

  return (
    <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
      <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
        <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
          <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
            <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>運賃のお見積もり</h2>
            <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>
              荷物の詳細情報、集荷先住所、配達先住所を入力いただくことで、料金の概算を算出することができます。（高速道路料・待機手数料等は別途必要になります。）
            </p>
            <div className={tw(`mt-8`)}>
              <div className={tw(`flex items-center`)}>
                <h3
                  className={tw(
                    `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-indigo-600`,
                  )}
                >
                  発送する荷物の詳細情報を入力してください。
                </h3>
                <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
              </div>
              <ul className={tw(`mt-8 lg:grid lg:grid-cols-12`)}>
                <li className={tw(`flex items-center lg:col-span-6`)} key="origin">
                  <p className={tw(`text-gray-600`)}>集荷場所</p>
                  <textarea
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className={tw(`border`)}
                    placeholder="例) 京都府京都市左京区吉田本町"
                  />
                </li>
                <li className={tw(`flex items-center lg:col-span-6`)} key="destination">
                  <p className={tw(`text-gray-600`)}>配達場所</p>
                  <textarea
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    className={tw(`border`)}
                    placeholder="例) 東京都千代田区神田駿河台1-1"
                  />
                </li>
                <li className={tw(`flex items-center lg:col-span-6`)} key="truck_size">
                  <p className={tw(`text-gray-600`)}>トラックサイズ</p>
                  {/* <label className={tw()}> */}
                  <input value="small" type="radio" onChange={truckSizeHandler} checked={truckSize === `small`} />
                  {` `}
                  小型車 (2t)
                  {/* </label> */}
                  {/* <label className={tw()}> */}
                  <input value="middle" type="radio" onChange={truckSizeHandler} checked={truckSize === `middle`} />
                  {` `}
                  中型車 (4t)
                  {/* </label> */}
                  {/* <label className={tw()}> */}
                  <input value="large" type="radio" onChange={truckSizeHandler} checked={truckSize === `large`} />
                  {` `}
                  大型車 (8t)
                  {/* </label> */}
                  {/* <label className={tw()}> */}
                  <input value="trailer" type="radio" onChange={truckSizeHandler} checked={truckSize === `trailer`} />
                  {` `}
                  トレーラー
                  {/* </label> */}
                </li>
                <li className={tw(`flex items-center lg:col-span-6`)} key="truck_type">
                  <p className={tw(`text-gray-600`)}>トラック種類</p>
                  {/* <label className={tw()}> */}
                  <input value="normal" type="radio" onChange={truckTypeHandler} checked={truckType === `normal`} />
                  {` `}
                  普通車
                  {/* </label> */}
                  {/* <label className={tw()}> */}
                  <input value="冷蔵車" type="radio" onChange={truckTypeHandler} checked={truckType === `冷蔵車`} />
                  {` `}
                  冷蔵車 / 冷凍車
                  {/* </label> */}
                </li>
                <li className={tw(`flex items-center lg:col-span-12`)} key="start_button">
                  <Button primary>{/* <p onClick={onSendHandler}>お見積もり開始</p> */}</Button>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={tw(
              `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
            )}
          >
            <p className={tw(`text-lg font-medium text-gray-800`)}>指定した条件での運賃概算は...</p>
            <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`)}>
              ¥{lowerFare}
            </div>
            <p className={tw(`text-sm font-medium text-gray-800`)}>走行距離</p>
            <div className={tw(`my-4 flex items-center justify-center text-xl leading-none font-bold text-gray-800`)}>
              {distanceText}
            </div>
            <p className={tw(`text-sm font-medium text-gray-800`)}>時間</p>
            <div className={tw(`my-4 flex items-center justify-center text-xl leading-none font-bold text-gray-800`)}>
              {time}
            </div>
            <Button primary modifier="mt-6">
              トライアルで使ってみる
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
