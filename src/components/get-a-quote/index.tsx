/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { tw } from 'twind';
import Image from 'next/image';

const GetAQuote = () => (
  <div className={tw(`flex items-center bg-even`)}>
    <div className={tw(`px-5 max-w-6xl mx-auto w-full`)}>
      <div className={tw(`w-full py-12 lg:py-24`)}>
        <div className={tw(`flex flex-wrap`)}>
          <div className={tw(`w-full lg:w-1/2 p-8 text-white form-left bg-custom rounded`)}>
            <h1 className={tw(`text-3xl lg:text-45xl tracking-subtitle p-2 lg:p-5`)}>Get a Free Quote</h1>
            <div className={tw(`my-6 px-2 lg:px-5`)}>
              <p>
                Reach out to schedule a personalized demo with our team. We’ll show you how Atlas One enables your
                organization to professionally manage a modern public communications strategy.
              </p>
            </div>
            <div className={tw(`my-8 flex justify-center`)}>
              <Image src="/pc.png" width={240} height={240} />
            </div>
          </div>
          <div className={tw(`w-full lg:w-1/2 p-8 bg-white form-right`)}>
            <form className={tw(`flex justify-center flex-col rounded-md`)}>
              <div>
                <div className={tw(`flex flex-wrap justify-between`)}>
                  <div className={tw(`flex flex-col my-2 field-half`)}>
                    <label htmlFor="hostname" className={tw(`text-sm`)}>
                      First name
                    </label>
                    <input
                      placeholder=""
                      className={tw(`border border-field rounded p-2 my-2 font-medium`)}
                      type="text"
                      id="firstname"
                    />
                  </div>
                  <div className={tw(`flex flex-col my-2 field-half`)}>
                    <label htmlFor="lastname" className={tw(`text-sm`)}>
                      Last name
                    </label>
                    <input
                      placeholder=""
                      className={tw(`border border-field rounded p-2 my-2 font-medium`)}
                      type="text"
                      id="lastname"
                    />
                  </div>
                </div>
                <div className={tw(`flex flex-wrap justify-between`)}>
                  <div className={tw(`flex flex-col my-2 field-full`)}>
                    <label htmlFor="email" className={tw(`text-sm`)}>
                      Work Email*
                    </label>
                    <input
                      placeholder=""
                      className={tw(`border border-field rounded p-2 my-2 font-medium`)}
                      type="text"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className={tw(`flex flex-wrap justify-between`)}>
                  <div className={tw(`flex flex-col my-2 field-full`)}>
                    <label htmlFor="phone" className={tw(`text-sm`)}>
                      Phone number
                    </label>
                    <input
                      placeholder=""
                      className={tw(`border border-field rounded p-2 my-2 font-medium`)}
                      type="text"
                      id="phone"
                    />
                  </div>
                </div>
                <div className={tw(`flex flex-wrap justify-between`)}>
                  <div className={tw(`flex flex-col my-2 field-half`)}>
                    <label htmlFor="company" className={tw(`text-sm`)}>
                      Company name
                    </label>
                    <input
                      placeholder=""
                      className={tw(`border border-field rounded p-2 my-2 font-medium`)}
                      type="text"
                      id="company"
                    />
                  </div>
                  <div className={tw(`flex flex-col my-2 field-half`)}>
                    <label htmlFor="jobtitle" className={tw(`text-sm`)}>
                      Job Title
                    </label>
                    <input
                      placeholder=""
                      className={tw(`border border-field rounded p-2 my-2 font-medium`)}
                      type="text"
                      id="jobtitle"
                    />
                  </div>
                </div>
                <div className={tw(`flex flex-wrap justify-between`)}>
                  <div className={tw(`flex flex-col my-2 field-full`)}>
                    <label htmlFor="state" className={tw(`text-sm`)}>
                      State/Region
                    </label>
                    <input
                      placeholder=""
                      className={tw(`border border-field rounded p-2 my-2 font-medium`)}
                      type="text"
                      id="state"
                    />
                  </div>
                </div>
                <div className={tw(`flex flex-wrap justify-between`)}>
                  <div className={tw(`flex flex-col my-2 field-full`)}>
                    <label htmlFor="inbound_form_more_information" className={tw(`text-sm`)}>
                      Anything Else?
                    </label>
                    <textarea
                      placeholder=""
                      className={tw(`border border-field rounded p-2 my-2 font-medium`)}
                      id="inbound_form_more_information"
                    />
                  </div>
                </div>
                <button className={tw(`blue-button text-white font-medium lg:mx-0 py-3 px-6 mt-2`)} type="submit">
                  Request demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GetAQuote;
