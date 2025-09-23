import { useState } from 'react';
import { ProductInformationProps } from '../types/types';
import s from './styles.module.scss';

export const UiProductInformation = ({
  ReviewsAndRatings,
  ProductDetails,
  ProductFAQ,
}: ProductInformationProps) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { label: 'Product Details', component: <ProductDetails /> },
    { label: 'Rating & Reviews', component: <ReviewsAndRatings /> },
    { label: 'FAQs', component: <ProductFAQ /> },
  ];

  return (
    <div className={s.productInformation}>
      <div className={s.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${s.tabWrapper} ${activeTab === index ? s.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <span className={s.tab}>{tab.label}</span>
          </div>
        ))}
        <div
          className={s.activeIndicator}
          style={{
            transform: `translateX(${activeTab * 100}%)`,
            width: `${100 / tabs.length}%`,
          }}
        />
      </div>
      <div className={s.content}>{tabs[activeTab].component}</div>
    </div>
  );
};
