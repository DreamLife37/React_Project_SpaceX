export interface ShipsDataType {
    ship_id: string
    ship_name: string
    ship_model: any
    ship_type: string
    roles: string[]
    active: boolean
    imo: any
    mmsi: number
    abs: any
    class: any
    weight_lbs: any
    weight_kg: any
    year_built: any
    home_port: string
    status: string
    speed_kn: any
    course_deg: any
    position: Position
    successful_landings: any
    attempted_landings: any
    missions: Mission[]
    url: string
    image: string
}

export interface Position {
    latitude: any
    longitude: any
}

export interface Mission {
    name: string
    flight: number
}
