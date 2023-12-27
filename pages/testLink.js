import { useEffect, useState } from 'react';
import axios from 'axios';

export default function testLink() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = async () => {
    try {
      const response = await axios.get('https://www.6figure-earner.world/login/'); // Replace with the URL of the page you want to fetch the links from
      const linkElements = new DOMParser().parseFromString(response.data, 'text/html').querySelectorAll('a');

      const extractedLinks = Array.from(linkElements).map((link) => link.href);
      setLinks(extractedLinks);
    } catch (error) {
      console.error('Error fetching links:', error);
    }
  };

  return (
    <div>
      <h1>Links</h1>
      {links.map((link, index) => (
        <p key={index}>{link}</p>
      ))}
    </div>
  );
}