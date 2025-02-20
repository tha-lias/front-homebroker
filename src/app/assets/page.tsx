import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Asset } from "./../models";
import { AssetShow } from "@/components/AssetShow";


export async function getAssets(): Promise<Asset[]> {
  const response = await fetch(`http://localhost:3000/assets`)
  return response.json()
}

export default async function AssetsListPage(
  { searchParams,
  }: {
    searchParams: Promise<{ wallet_id: string }>;
  }) {

  const { wallet_id } = await searchParams;

  const assets = await getAssets(wallet_id)


  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Ativos</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Comprar/vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {
              assets.map((asset, key) => (
                <TableRow key={key}>
                  <TableCell>
                    <AssetShow asset={asset}/>
                  </TableCell>
                  <TableCell>R$ {asset.price}</TableCell>
                  <TableCell>
                    <Button color="light">Comprar/vender</Button>
                  </TableCell>
                </TableRow>
              ))}

          </TableBody>
        </Table>

      </div>
    </div>
  );
}
