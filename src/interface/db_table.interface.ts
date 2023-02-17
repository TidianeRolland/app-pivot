export interface DBColumn {
    name: string;
    type: string;
    key: string;
    visible: boolean;
}

export interface DBTable<T> {
    table_name: string;
    data: T[];
    columns: DBColumn[];
    foreign_keys: ForeignKeyRelation[] | null;
}

export interface ForeignKeyRelation {
    foreign_key: string;
    foreign_table_id: string;
    foreign_table_name: string;
}