import React, { FC, ReactElement } from 'react';
import { EyeOutlined, BgColorsOutlined, DownloadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import styles from './table-header.module.css';
import Dropbox from '../dropbox';
import changeType from '../../actions/change-type';

import {
  locations,
  defaultLocationIndex,
  displays,
  defaultDisplayIndex,
  courses,
  defaultCourseIndex,
} from './table-header-data';

import HeaderButton from '../header-button/header-button';

const TableHeader: FC<any> = ({ changeType }): ReactElement => {
  const typeChange = (el:any):void => {
    changeType(el);
  };

  return (
    <div className={styles.table__header}>
      <div className={styles['table__header-left']}>
        <Dropbox componentClassName="select-location" items={locations} defaultIndex={defaultLocationIndex} />
        <Dropbox handler={typeChange} items={displays} defaultIndex={defaultDisplayIndex} />
        <Dropbox items={courses} defaultIndex={defaultCourseIndex} />
        <HeaderButton buttonImage={<BgColorsOutlined />} />
      </div>
      <div className={styles['table__header-right']}>
        <HeaderButton buttonImage={<EyeOutlined />} />
        <HeaderButton buttonImage={<DownloadOutlined />} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  changeType,
};

// const mapDispatchToProps = (dispatch: any) => ({
//   change: (newType: string) => {
//     dispatch(changeType);
//   },
// });

export default connect(null, mapDispatchToProps)(TableHeader);
