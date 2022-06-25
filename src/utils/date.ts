import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function DateFormatBRL(availableAt: Date) {
  const date = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });
  return date;
}