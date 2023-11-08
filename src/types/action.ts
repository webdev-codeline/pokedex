export type Action = {
  type: 'addHistory' | 'addVisit';
  payload: {
    id: number;
  };
};
