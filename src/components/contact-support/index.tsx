/* eslint-disable max-len */
import React from 'react';
import { tw } from 'twind';
import Button from '../button';

const ContactSupport = () => (
  <section id="contact-support" className={tw(`px-5 bg-white`)}>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <div className={tw(`max-w-6xl mx-auto px-5 py-12 lg:py-24`)}>
        <div className={tw(`w-full flex flex-wrap justify-center lg:justify-between items-center`)}>
          <div className={tw(`flex flex-col items-center text-center lg:block lg:text-left`)}>
            <h2 className={tw(`text-blue uppercase tracking-title text-sm`)}>Need Help ?</h2>
            <h2 className={tw(`block text-3xl lg:text-5xl max-w-3xl mt-4 sub-title font-bold`)}>
              Chat with our sales team
            </h2>
          </div>
          <Button primary>+1-319-296-5799</Button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSupport;
