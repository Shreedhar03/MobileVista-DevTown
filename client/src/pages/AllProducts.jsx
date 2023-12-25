import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MobileCard from '../components/MobileCard';
import down from '../assets/down.svg';
import up from '../assets/up.svg';
import { AppContext } from '../App';

const AllProducts = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [ramFilter, setRamFilter] = useState('All');
  const [storageFilter, setStorageFilter] = useState('All');
  const [processorFilter, setProcessorFilter] = useState('All');

  const { allProducts } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'RAM':
        setRamFilter(value);
        break;
      case 'Storage':
        setStorageFilter(value);
        break;
      case 'Processor':
        setProcessorFilter(value);
        break;
      default:
        break;
    }
  };

  const filteredProducts = allProducts.filter((product) => {
    const isRamMatch = ramFilter === 'All' || product.RAM === ramFilter;
    const isStorageMatch = storageFilter === 'All' || product.storage === storageFilter;
    const isProcessorMatch = processorFilter === 'All' || product.processor === processorFilter;

    return isRamMatch && isStorageMatch && isProcessorMatch;
  });

  return (
    <>
      <Navbar />

      <section className='max-w-6xl mx-6 xl:mx-auto my-6'>
        <h2 className='text-lg flex items-center gap-1' onClick={() => setShowFilters(!showFilters)}>
          Apply Filters <img src={!showFilters ? down : up} alt="down" />
        </h2>
        <div className={`${showFilters ? 'flex' : 'hidden'} flex gap-4 sm:gap-8 flex-wrap mt-3 mb-6`}>
          <FilterGroup title="RAM" filters={['All', '8GB', '16GB', '32GB']} selectedFilter={ramFilter} onFilterChange={(value) => handleFilterChange('RAM', value)} />
          <FilterGroup title="Storage" filters={['All', '64GB', '128GB', '256GB']} selectedFilter={storageFilter} onFilterChange={(value) => handleFilterChange('Storage', value)} />
          <FilterGroup title="Processor" filters={['All', 'Dimensity', 'MediaTek', 'Snapdragon', 'Qualcomm']} selectedFilter={processorFilter} onFilterChange={(value) => handleFilterChange('Processor', value)} />
        </div>
        <h1 className='text-lg mt-4'>Discover All Smartphones</h1>
        <div className='flex flex-wrap items-center justify-center sm:justify-start gap-6 mt-6'>
          {filteredProducts?.map((p, key) => {
            return <MobileCard id={p._id} key={key} brand={p.brand} productName={p.productName} images={p.images} discountPercentage={p.discountPercentage} price={p.price} rating={p.rating} />;
          })}
        </div>
      </section>
    </>
  );
};

const FilterGroup = ({ title, filters, selectedFilter, onFilterChange }) => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='underline'>{title}</h1>
      <div className='flex flex-wrap gap-2 items-center'>
        {filters.map((filter, index) => (
          <label key={index} className={`px-2 py-1 rounded-lg ${selectedFilter === filter ? 'bg-slate-800 text-white' : 'bg-slate-200'}`}>
            <input type="radio" className='hidden' name={title} value={filter} checked={selectedFilter === filter} onChange={() => onFilterChange(filter)} />
            {filter}
          </label>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
