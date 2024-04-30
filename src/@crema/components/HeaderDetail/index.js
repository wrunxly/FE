import React, { useState } from 'react';
import { Divider, IconButton, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ComposeMail from '../AppAddress';
import { closeTab } from '../../../redux/actions/tabActon';
import { X, Send, Save } from 'feather-icons-react';
import {
  Edit,
  Printer,
  FileText,
  Copy,
  CornerDownLeft,
  RotateCcw,
  Check,
} from 'feather-icons-react';
import { Clipboard, Globe } from 'feather-icons-react';
import { handleEdit, handleClose } from '../../../redux/actions/headerAction';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { BsTranslate } from 'react-icons/bs';

const HeaderDetail = ({
  nama,
  send,
  save,
  copy,
  translate,
  edit,
  printer,
  filetext,
  cornerdownleft,
  rotateccw,
  check,
  globe,
  clipboard,
  IsEditing,
}) => {
  const dispatch = useDispatch();
  const tabs = useSelector((state) => state.tab.tabs);
  const tab = tabs.find((tab) => tab.active);
  const isEdit = useSelector((state) => state.header.isEdit);
  const [isComposeMail, setComposeMail] = React.useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };

  const handleTabClose = () => {
    dispatch(closeTab(tab.id, tabs));
  };
  const handleEdits = () => {
    dispatch(handleEdit());
  };

  const handleClosed = () => {
    dispatch(handleClose());
  };
  return (
    <>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ paddingX: 8, paddingTop: 12, paddingBottom: 4 }}
      >
        <Typography fontSize='20px' fontWeight='700'>
          {nama}
        </Typography>

        <Stack direction='row' columnGap='24px'>
          {isEdit ? (
            <>
              <IconButton
                sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
              >
                <Save style={{ width: '28px', height: '28px' }} />
              </IconButton>
              <IconButton
                sx={{ border: '1px solid #B1B5BA', borderRadius: '3px', color:'white', background:'#A3E6CD'}}
              >
                <Check style={{ width: '28px', height: '28px' }} />
              </IconButton>
              <IconButton
                sx={{ border: '1px solid #B1B5BA', borderRadius: '3px', color:'white', background:'#FFD079' }}
              >
                <CornerDownLeft style={{ width: '28px', height: '28px' }} />
              </IconButton>
              <IconButton
                sx={{ border: '1px solid #B1B5BA', borderRadius: '3px', color:'white', background:'#FFD079'}}
              >
                <RotateCcw style={{ width: '28px', height: '28px' }} />
              </IconButton>
              <IconButton
                sx={{ border: '1px solid #B1B5BA', borderRadius: '3px', color:'white', background:'#FF7452' }}
                onClick={handleClosed}
              >
                <X style={{ width: '28px', height: '28px' }} />
              </IconButton>
              <IconButton
                sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
              >
                <FileText style={{ width: '28px', height: '28px' }} />
              </IconButton>
              <IconButton
                sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
              >
                <Copy style={{ width: '28px', height: '28px' }} />
              </IconButton>
              <IconButton
                sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                onClick={() => handleTabClose()}
              >
                <X style={{ width: '28px', height: '28px' }} />
              </IconButton>
            </>
          ) : (
            <>
              {save && (
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <Save style={{ width: '28px', height: '28px' }} />
                </IconButton>
              )}
              {send && (
                <IconButton
                  onClick={onOpenComposeMail}
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <Send style={{ width: '28px', height: '28px' }} />
                </IconButton>
              )}
              {clipboard && (
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <Clipboard style={{ width: '28px', height: '28px' }} />
                </IconButton>
              )}
              {globe && (
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <Globe style={{ width: '28px', height: '28px' }} />
                </IconButton>
              )}
              {copy && (
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <AssignmentOutlinedIcon
                    style={{ width: '28px', height: '28px' }}
                  />
                </IconButton>
              )}
              {translate && (
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <BsTranslate style={{ width: '28px', height: '28px' }} />
                </IconButton>
              )}
              {edit && (
                <IconButton
                  onClick={handleEdits}
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <Edit style={{ width: '28px', height: '28px' }} />
                </IconButton>
              )}
              {printer && (
                <IconButton
                  sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                >
                  <Printer style={{ width: '28px', height: '28px' }} />
                </IconButton>
              )}
              <IconButton
                sx={{ border: '1px solid #B1B5BA', borderRadius: '3px' }}
                onClick={() => handleTabClose()}
              >
                <X style={{ width: '28px', height: '28px' }} />
              </IconButton>
            </>
          )}
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: '#B1B5BA', borderBottomWidth: '2px' }} />
      <ComposeMail
        isComposeMail={isComposeMail}
        onCloseComposeMail={onCloseComposeMail}
      />
    </>
  );
};

HeaderDetail.propTypes = {
  nama: PropTypes.string,
  save: PropTypes.bool,
  send: PropTypes.bool,
  copy: PropTypes.bool,
  translate: PropTypes.bool,
  edit: PropTypes.bool,
  printer: PropTypes.bool,
  filetext: PropTypes.bool,
  cornerdownleft: PropTypes.bool,
  rotateccw: PropTypes.bool,
  check: PropTypes.bool,
  globe: PropTypes.bool,
  clipboard: PropTypes.bool,
  IsEditing: PropTypes.bool,
};

export default HeaderDetail;
