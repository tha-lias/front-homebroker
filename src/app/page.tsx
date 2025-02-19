import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function MyWalletList() {
  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Minha Carteira</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Quantidade</TableHeadCell>
            <TableHeadCell>Comprar/vender</TableHeadCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Ativo</TableCell>
              <TableCell>Cotação</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell>
                <Button color="light">Comprar/vender</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
      </div>
    </div>
  );
}
