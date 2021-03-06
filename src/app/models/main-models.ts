export interface TokenResponse {
  res: {
    auth: Token;
    user: UserData;
  },
  error: any;
}

export interface Token {
  token: String;
  //type: String;
}
export interface UserSignin {
  email: string;
  senha: string;
}

export interface UserData {
  sub: number;
  name: String;
  status: Number;
  hora: any;
  usuario: String;
}

export interface returnJornada {
  id:          number;
  data:        string;
  horaEntrada: string;
  horaSaida:   string;
  horaExtra:   null;
  horaBanco:   null;
  observacao:  null;
  aprovacao:   null;
}