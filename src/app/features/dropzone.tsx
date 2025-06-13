'use client';

import React, { FC, useState } from 'react';
import MyDropzone from '@/components/dropzone';
import BooksPage from './table';

const DropzonesWithTable: FC = () => {
  const [tableData, setTableData] = useState<Record<string, string>[]>([]);
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="min-h-screen p-4">
      <MyDropzone
        onFileDrop={(data) => {
          setTableData(data);
          setShow(true);
        }}
      />
      <div className="mt-5">
        {show && <BooksPage data={tableData} />}
      </div>
    </div>
  );
};

export default DropzonesWithTable;
