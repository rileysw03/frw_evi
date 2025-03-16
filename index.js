export default {
  async fetch(request) {
    const apiUrl = "https://api.weather.gov/products/types/FRW"; // Replace with your API

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      let placefile = "Title: FRW\n";
      placefile += "Refresh: 60\n";
      placefile += "Color: 255 0 0\n"; // Red

      data.forEach((item) => {
        placefile += `Object: ${item.lat}, ${item.lon}\n`;
        placefile += `  Icon: 0,0,10,10,"circle"\n`;
        placefile += `  Text: 0,0,1,"${item.label}"\n`;
      });

      return new Response(placefile, {
        headers: { "Content-Type": "text/plain" },
      });
    } catch (error) {
      return new Response("Error fetching data", { status: 500 });
    }
  },
  
  async fetch(request) {
    const apiUrl = "https://api.weather.gov/products/types/EVI"; // Replace with your API

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      let placefile = "Title: EVI\n";
      placefile += "Refresh: 60\n";
      placefile += "Color: 255 0 0\n"; // Red

      data.forEach((item) => {
        placefile += `Object: ${item.lat}, ${item.lon}\n`;
        placefile += `  Icon: 0,0,10,10,"circle"\n`;
        placefile += `  Text: 0,0,1,"${item.label}"\n`;
      });

      return new Response(placefile, {
        headers: { "Content-Type": "text/plain" },
      });
    } catch (error) {
      return new Response("Error fetching data", { status: 500 });
    }
  },
};

