import React from 'react';
import style from "./style.module.css"

interface IProps {
  routes: string[];
}

const Breadcrumbs: React.FC<IProps> = ({ routes }) => {
  return (
    <>
      <div>
        {routes.map((item, index) => (
          <a className={style.breadcrumbsLink} key={item}>
            {item}
            {index !== routes.length - 1 && ' / '}
          </a>
        ))}
      </div>
    </>
  );
};
export default Breadcrumbs;
