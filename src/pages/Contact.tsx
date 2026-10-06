import { Helmet } from 'react-helmet-async';
import { ContactSection } from '../components/home/ContactSection';
import { siteData } from '../data/site';

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - {siteData.name}</title>
        <meta name="description" content={`Contact ${siteData.name} in Oftringen.`} />
      </Helmet>
      <ContactSection standalone={true} />
    </>
  );
};
