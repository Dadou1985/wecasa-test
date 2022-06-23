import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { ProductContext } from '../context/productContext';

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: boolean) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const state = useContext(ProductContext)

  const handleClose = () => {
    onClose(false);
  };

  const handleRemoveItem = (index: number) => {
    state?.basket.splice(index, 1)
    state?.setBasket([...state?.basket])
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle style={{
        textAlign: "center",
        backgroundColor: "whitesmoke"
      }}>Panier</DialogTitle>
      <List style={{width: "20vw"}}>
        {state?.basket.map((data: any, index) => (
          <ListItem button key={index}>
            <div>{data.title}</div>
            <Button variant="text" color='error' onClick={() => handleRemoveItem(index)}>Retirer</Button>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function BasketModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: boolean) => {
    setOpen(false);
  };

  return (
    <div>
      <LocalGroceryStoreIcon onClick={handleClickOpen} fontSize="large" style={{cursor: "pointer"}} />
      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
