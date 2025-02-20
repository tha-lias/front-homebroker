import { Asset, OrderType } from "@/app/models";
import { Button, Label, TextInput } from "flowbite-react";


export function OrderForm(props: { asset: Asset, walletId: string; type: OrderType }) {
    const color = props.type == OrderType.BUY ? 'text-blue-700' : 'text-red-700';
    const translatedType = props.type == OrderType.BUY ? 'compra' : 'venda';

    return (
        <form>
            <input type="hidden" name="assetId" defaultValue={props.asset._id} />
            <input type="hidden" name="walletId" defaultValue={props.walletId} />
            <input type="hidden" name="type" defaultValue={props.type} />

            <div>
                <div className="mb-2">
                    <Label htmlFor="shares" value="Quantidade" className={color} />
                </div>
                <TextInput id="shares" name="shares" required type="number" min={1} step={1} defaultValue={1} color={props.type == OrderType.BUY ? 'info' : 'failure'} />
            </div>

            <div>
                <div className="my-2">
                    <Label htmlFor="price" value="Preço R$" className={color} />
                </div>
                <TextInput id="price" name="price" required type="number" min={1} step={1} defaultValue={1} color={props.type == OrderType.BUY ? 'info' : 'failure'} />
            </div>
            <br />
                <Button type="submit" color={props.type == OrderType.BUY ? "blue" : "failure"}> Confirmar {translatedType} </Button>
            </form>
                )
}

