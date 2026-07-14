import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { PriceRow } from "@/content/types";

export function PriceTable({ rows, note }: { rows: PriceRow[]; note?: string }) {
  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-md border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-warm hover:bg-warm">
              <TableHead className="text-foreground">항목</TableHead>
              <TableHead className="text-foreground">요금</TableHead>
              <TableHead className="text-foreground">비고</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.item}>
                <TableCell className="font-medium">{row.item}</TableCell>
                <TableCell className="font-semibold text-gold">{row.price}</TableCell>
                <TableCell className="text-muted-foreground">{row.note ?? "—"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {note ? <p className="text-xs leading-relaxed text-muted-foreground">{note}</p> : null}
    </div>
  );
}
