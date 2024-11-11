import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table'
import { Download } from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '../components/ui/pagination'
import { Button } from '../components/ui/button'

const invoices = [
  {
    invoiceNumber: '121548784515487',
    orderNumber: 'ORD-001',
    totalPrice: '$100.00',
  },
  {
    invoiceNumber: 'INV-002',
    orderNumber: 'ORD-002',
    totalPrice: '$200.00',
  },
  {
    invoiceNumber: 'INV-001',
    orderNumber: 'ORD-001',
    totalPrice: '$100.00',
  },
  {
    invoiceNumber: 'INV-002',
    orderNumber: 'ORD-002',
    totalPrice: '$200.00',
  },
  {
    invoiceNumber: 'INV-001',
    orderNumber: 'ORD-001',
    totalPrice: '$100.00',
  },
  {
    invoiceNumber: 'INV-002',
    orderNumber: 'ORD-002',
    totalPrice: '$200.00',
  },
  {
    invoiceNumber: 'INV-002',
    orderNumber: 'ORD-002',
    totalPrice: '$200.00',
  },
  {
    invoiceNumber: 'INV-002',
    orderNumber: 'ORD-002',
    totalPrice: '$200.00',
  },
]

const InvoicesPage = () => {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Číslo faktury</TableHead>
            <TableHead>Číslo objednávky</TableHead>
            <TableHead className="">Cena celkem</TableHead>
            <TableHead className="text-right">Stažení</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoiceNumber}>
              <TableCell>{invoice.invoiceNumber}</TableCell>
              <TableCell>{invoice.orderNumber}</TableCell>
              <TableCell>{invoice.totalPrice}</TableCell>
              <TableCell className="text-right">
                <a
                  href={`/download/${invoice.invoiceNumber}`}
                  className="text-blue-500 hover:underline flex items-center gap-2 justify-end"
                >
                  <Download size={16} /> Stažení
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center relative m-4xl">
        <Button variant={'default'}>Načíst další</Button>
        <Pagination className="right-0 absolute">
          <PaginationContent className=" flex gap-1">
            <PaginationItem>
              <PaginationLink isActive href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">53</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default InvoicesPage
