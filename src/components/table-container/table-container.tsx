import React, { FC, ReactElement } from 'react';

import styles from './table-container.module.css';
import MainTable from '../main-table';
import '../calendar-schedule';
import CalendarSchedule from '../calendar-schedule';

const TableContainer: FC = (): ReactElement => (
  <section className={styles['table-container']}>
    <MainTable />
    <CalendarSchedule />
  </section>
);

export default TableContainer;
