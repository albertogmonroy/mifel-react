import { useEffect, useState, ChangeEvent } from "react";
import { useUsersStore } from "../../hooks/users/usersStore";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Actions } from "./Actions";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

export const TableUsers = () => {
  const { users, getUsers } = useUsersStore();

  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  }, [users, getUsers]);
  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [filters1, setFilters1] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    email: { value: null, matchMode: FilterMatchMode.CONTAINS },
    website: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const filtroInicial = () => {
    setFilters1({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      id: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { value: null, matchMode: FilterMatchMode.CONTAINS },
      email: { value: null, matchMode: FilterMatchMode.CONTAINS },
      website: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    setGlobalFilterValue1("");
  };
  const onGlobalFilterChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const _filters1 = { ...filters1 };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    _filters1["global"].value = value;
    setFilters1(_filters1);
    setGlobalFilterValue1(value);
  };
  const renderHeader = () => {
    return (
      <>
        <div className="flex w-full flex-wrap justify-content-center">
          <span className="p-input-icon-right">
            <i className="pi pi-search" />
            <InputText
              name="busqueda"
              value={globalFilterValue1}
              onChange={onGlobalFilterChange1}
              placeholder="Buscar"
            />
          </span>
        </div>
      </>
    );
  };
  useEffect(() => {
    filtroInicial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card">
      <DataTable
        value={users}
        stripedRows
        header={renderHeader()}
        size="small"
        emptyMessage="No se pudieron localizar resultados"
        removableSort
        showGridlines
        globalFilterFields={["id", "name", "email", "website"]}
        filters={filters1}
        filterDisplay="menu"
      >
        <Column sortable field="id" header="ID"></Column>
        <Column sortable field="name" header="Name"></Column>
        <Column sortable field="email" header="Email"></Column>
        <Column sortable field="website" header="Website"></Column>
        <Column
          header="Action"
          body={(e) => {
            return <Actions {...e} />;
          }}
        ></Column>
      </DataTable>
    </div>
  );
};
