
class Services {
    constructor(url, spaceShipEndpoint, planetEndpoint) {
      this.url = 'http://localhost:5000';
      this.planetEndpoint = `/api/planets`;
      this.spaceShipEndpoint = `/api/spaceship`;
      this.apiPassengersToShipEndpoint = `/api/passengers/toship`;
      this.apiPassengersToPlanetpEndpoint = `/api/passengers/toplanet`;
    }
  
    async getPlanets() {
      try {
        const response = await fetch(`${this.url}${this.planetEndpoint}`);
        const data = await response.json();
        
        return data;
      } catch (error) {
        console.error(`Error ${error}`);
        throw error;
      }
    }
  
    async getShip() {
      try {
        const response = await fetch(`${this.url}${this.spaceShipEndpoint}`);
        const data = await response.json();
  
        return data;
      } catch (error) {
        console.error(`Error ${error}`);
        throw error;
      }
    }
  
    async moveShip(id) {
      try {
        const fetchOptions = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        };
  
        const response = await fetch(
          `${this.url}${this.spaceShipEndpoint}/${id}`,
          fetchOptions
        );
        const data = await response.json();
  
        return data;
      } catch (error) {
        console.error(`Error ${error}`);
        throw error;
      }
    }
  
    async toShip(id) {
      try {
        const fetchOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        };
  
        const response = fetch(
          `${this.url}${this.apiPassengersToShipEndpoint}/${id}`,
          fetchOptions
        );
        
        const data = (await response).json();
        return data;
      } catch (error) {
        console.error(`Error ${error}`);
        throw error;
      }
    }
  
    async toPlanet(id) {
      try {
        const fetchOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        };
  
        const response = fetch(
          `${this.url}${this.apiPassengersToPlanetpEndpoint}/${id}`,
          fetchOptions
        );
        const data = (await response).json();
        return data;
      } catch (error) {
        console.error(`Error ${error}`);
        throw error;
      }
    }
  }
  
  const services = new Services();
  
  export default services;