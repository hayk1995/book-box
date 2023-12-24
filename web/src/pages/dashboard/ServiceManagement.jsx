import {useState, useEffect} from "react";
import { getUserServices, createUserService } from "../../services/serviceManagement";

function ServiceManagement() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      const fetchedServices = await getUserServices('7157ce7e-143c-42df-8fa3-ada50a44cfb3');
      setServices(fetchedServices);
    }
    fetchServices();
  });

  const addService = () => {
    createUserService('7157ce7e-143c-42df-8fa3-ada50a44cfb3', {
      name: 'Maz ktrel',
      description: 'Halelua',
      price: 100,
      durationInSeconds: 1
    })
  }

  return (
    <div>
      <ul>
        {services.map((it)=>(<li>{it?.name}</li>))}
      </ul>
      <button onClick={addService}>Add Test Service</button>
    </div>
  );
}

export default ServiceManagement;