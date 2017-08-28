import { ICheckOut } from '../../models/InventoryCheckOutModel';
import { CheckOutSaveOperationCallback, CancelDialogOperationCallback } from '../../models/ItemOperationCallback';

interface ICheckInDialogProps {
    item: ICheckOut;
    isOpen: boolean;
    parentTitle:string;
    currentUser:string;
    itemSaveOperationCallback: CheckOutSaveOperationCallback;
    itemCloseOperationCallback: CancelDialogOperationCallback;
}
export default ICheckInDialogProps;