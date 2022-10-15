import React from "react";
import { Checkbox } from "@mui/material";
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './styles.css';

const filtrar = [
  { label: 'Mais Relevante' },
  { label: 'Maior Valor' },
  { label: 'Menor Valor' },
  { label: 'Mais Vendidos' },];

export default function TodosProdutos() {
  return (
    <React.Fragment>
      <Header />
      <div className="container body">
        <div className="div1">
          <div>
            <strong>Resultado para "Tênis" </strong><text> - 389 Resultados</text>
          </div>
          <div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={filtrar}
              sx={{ width: '250px' }}
              renderInput={(params) => <TextField {...params} label="Ordenar Por" />}
            />
          </div>
        </div>
        <div className="div2">
          <div className="divFiltrar">
            <form className="form formTodosProdutos" style={{marginLeft: 0,marginTop: 0}}>
              <strong>Filtrar Por</strong>
              <hr />
              <strong>Marca</strong>
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck"   defaultChecked sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="Adiddas"
                labelPlacement="Adiddas"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck" sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="Calenciaga"
                labelPlacement="Calenciaga"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck" defaultChecked sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="K-Swiss"
                labelPlacement="K-Swiss"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck" sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="Nike"
                labelPlacement="Nike"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck" sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="Puma"
                labelPlacement="Puma"
              />
              <br />
              <strong>Categorias</strong>
              <br />
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck" defaultChecked sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="Esporte e Laser"
                labelPlacement="Esporte e Laser"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck" sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="Casual"
                labelPlacement="Casual"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck" sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="Utilitário"
                labelPlacement="Utilitário"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck" sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="Corrida"
                labelPlacement="Corrida"
              />
              <br />
              <strong>Genero</strong>
              <br />
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck" defaultChecked sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="Masculino"
                labelPlacement="Masculino"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck" defaultChecked sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="Feminino"
                labelPlacement="Feminino"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox size="medium" className="customCheck" sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />
                }
                label="Unisex"
                labelPlacement="Unisex"
              />
              <br/>
              <strong>Estado</strong>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel size="small" className="customRadio" value="female" control={<Radio sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />} label="Novo" />
                <FormControlLabel size="small" className="customRadio" value="male" control={<Radio sx={{ color: "secondary", '&.Mui-checked': { color: pink[600], }, }} />} label="Usado" />
              </RadioGroup>
            </form>
          </div>
          <div className="divConteudo">
            <h4>produtos</h4>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}