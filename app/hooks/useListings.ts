import { useEffect, useState } from 'react';
import { getListings } from '../api/listings';
import { ListingItem } from '../model/Listing';

const useListings = () => {
  const [listings, setListings] = useState<ListingItem[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadListings = async () => {
    setIsLoading(true);
    const response = await getListings();
    setIsLoading(false);
    if (!response.ok) {
      return setError(true);
    }
    setError(false);
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return {listings, error , isLoading, loadListings}
};

export default useListings