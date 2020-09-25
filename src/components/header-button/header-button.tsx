import React, { ReactElement } from 'react';

import { Button } from 'antd';

type HeaderButtonProps = {
    buttonImage: ReactElement,
}

const HeaderButton = ({ buttonImage } : HeaderButtonProps): ReactElement => (
  <Button type="text" size="large">{buttonImage}</Button>
);

export default HeaderButton;
