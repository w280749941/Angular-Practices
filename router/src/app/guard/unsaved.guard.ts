import { CanDeactivate } from '@angular/router';
import { ProductComponent } from '../product/product.component';

// Need to specify which object(component)
export class UnsavedGuard implements CanDeactivate<ProductComponent> {
    canDeactivate(component: ProductComponent) {
        return window.confirm('Save? Leaving');
    }
}
