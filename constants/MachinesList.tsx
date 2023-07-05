export interface CommonProps {
    name: string;
    machinelength: number;
    capacity: number,
    colors: number,
    type: string,
    classname?: any;
}
export interface MachinesListInterface {
    details: string
    items: Array<CommonProps>,
    id: number
}
  
  export const MachinesListInterface: MachinesListInterface[] = [
    { details: 'Printing Machinery for Computer Stationery.',
        items: [{
            name: "1)Timson Sun-UP'S' Machine",
            machinelength: 3,
            capacity: 60000,
            colors: 4,
            type: 'Sheets'
        },
        {
            name: "2)Timson Sun-UP'S' Machine",
            machinelength: 2,
            capacity: 40000,
            colors: 2,
            type: 'Sheets'
        },
        {
            name: "3)Timson Zig Zagger",
            machinelength: 1,
            capacity: 40000,
            colors: 1,
            type: 'Sheets'
        }],id: 1},
        { details: 'Web Offset Machinery for Roll to Sheet printing.',
        items: [{
            name: "1)DIDDE",
            machinelength: 2,
            capacity: 30000,
            colors: 4,
            type: 'Sheets'
        },
        {
            name: "2)DIDDE",
            machinelength: 1,
            capacity: 15000,
            colors: 6,
            type: 'sheets'
        }],id: 2},
        { details: 'Machinery for Security Features Printing',
        items: [{
            name: "1)Dover Star pack - to Pack Offset Machine",
            machinelength: 2,
            capacity: 36000,
            colors: 1,
            type: 'forms'
        },
        {
            name: "2)Dover Star pack - to Pack Letter Press Machine",
            machinelength: 2,
            capacity: 0,
            colors: 2,
            type: 'forms'
        }],id: 3},
        { details: 'Hologram / Hologram strip fusing Applicator Machinery',
        items: [{
            name: "1)Therm-O-Type Encoder",
            machinelength: 1,
            capacity: 15000,
            colors: 0,
            type: 'Nos.'
        },
        {
            name: "2)Jay Mahavir",
            machinelength: 1,
            capacity: 10000,
            colors: 0,
            type: 'Nos.'
        },
        {
            name: "3)Cavomit",
            machinelength: 1,
            capacity: 14000,
            colors: 0,
            type: 'Nos.'
        }],id: 4},
        { details: 'Signature Printing & Numbering Printing Machinery',
        items: [{
            name: "1)Dover Star pack - to Pack Letter Press Machine",
            machinelength: 3,
            capacity: 45000,
            colors: 1,
            type: 'forms'
        },
        {
            name: "2)Auto Pring - Variable size MICR Numbering",
            machinelength: 1,
            capacity: 10000,
            colors: 1,
            type: 'forms'
        },
        {
            name: "3)Greeky Machinery - Variable size MICR Numbering Machine",
            machinelength: 1,
            capacity: 40000,
            colors: 1,
            type: 'forms'
        }],id: 5},
        { details: 'Heatl Seal Lamination Machine',
        items: [{
            name: "1)Zell - make 18 (Speed : 15 Meter per Minute i.e 130 Documents per Minute per Machine)",
            machinelength: 2,
            capacity: 15600,
            colors: 0,
            type: 'Documents'
        },
        {
            name: "2)Indigenous - make 18 (Speed : 15 Meter per Minute i.e 130 Documents per Minute per Machine)",
            machinelength: 1,
            capacity: 7800,
            colors: 0,
            type: 'Documents'
        }],id: 6},
        { details: 'Cutting Machines',
        items: [{
            name: "1)Progamable Cuting Machine",
            machinelength: 1,
            capacity: 0,
            colors: 0,
            type: '--'
        }],id: 7},
        { details: 'Details of Computer pc/Server/Mainframe etc.',
        items: [{
            name: "1)Server",
            machinelength: 5,
            capacity: 0,
            colors: 0,
            type: 'Sheets'
        },
        {
            name: "2)PC",
            machinelength: 52,
            capacity: 0,
            colors: 0,
            type: 'Sheets'
        },
        {
            name: "3)Laptop",
            machinelength: 503,
            capacity: 0,
            colors: 0,
            type: 'Sheets'
        }],id: 8},
        { details: 'Details of Software regarding Security Design Printing',
        items: [{
            name: "1)Nautilus ||",
            machinelength: 0,
            capacity: 0,
            colors: 0,
            type: ''
        },
        {
            name: "2)Bank Note Edition",
            machinelength: 0,
            capacity: 0,
            colors: 0,
            type: ''
        },
        {
            name: "3)Security Design Software",
            machinelength: 0,
            capacity: 0,
            colors: 0,
            type: ''
        }],id: 9},
        { details: 'Scanner Machines',
        items: [{
            name: "1)Flat Bed Scanner",
            machinelength: 1,
            capacity: 0,
            colors: 0,
            type: ''
        },
        {
            name: "2)Kodak - A3 size Duplex Scanner",
            machinelength: 10,
            capacity: 0,
            colors: 0,
            type: ''
        },
        {
            name: "3)Argox 8000 Handheld Barcode Scaneer",
            machinelength: 10,
            capacity: 0,
            colors: 0,
            type: ''
        },
        {
            name: "4)Fujitsu Scanner",
            machinelength: 54,
            capacity: 0,
            colors: 0,
            type: ''
        }],id: 10},
        { details: 'Laser Printers',
        items: [{
                name: "A)Laser Printers- A4",
                machinelength: 0,
                capacity: 574,
                colors: 0,
                type: 'PPM',
                classname: 'font-semibold text-black'
            },{
            name: "1)Canon LBP 2900",
            machinelength: 5,
            capacity: 0,
            colors: 0,
            type: '',
            classname: 'pl-4'
        },
        {
            name: "B)Laser Printers- A3",
            machinelength: 0,
            capacity: 0,
            colors: 0,
            type: '',
            classname: 'font-semibold text-black'
        },
        {
            name: "1)Canon IR 7105",
            machinelength: 2,
            capacity: 0,
            colors: 0,
            type: '',
            classname: 'pl-4'
        },
        {
            name: "2)Canon IR 5075",
            machinelength: 4,
            capacity: 0,
            colors: 0,
            type: '',
            classname: 'pl-4'
        },
        {
            name: "3)Sharp AR-M464N",
            machinelength: 1,
            capacity: 0,
            colors: 0,
            type: '',
            classname: 'pl-4'
        },
        {
            name: "4)konica Minolta Colour Laser Print bizhub C224E",
            machinelength: 1,
            capacity: 0,
            colors: 0,
            type: '',
            classname: 'pl-4'
        },
        {
            name: "C)Line Printers",
            machinelength: 0,
            capacity: 0,
            colors: 0,
            type: '',
            classname: 'font-semibold text-black'
        },
        {
            name: "1)Wipro Proline 1000",
            machinelength: 2,
            capacity: 2000,
            colors: 0,
            type: 'LPM',
            classname: 'pl-4'
        }],id: 11},
        { details: 'Plate Making Unit / Imagesetter',
        items: [{
            name: "1)Iamge Setter Linotronics",
            machinelength: 1,
            capacity: 0,
            colors: 0,
            type: ''
        },
        {
            name: "2)Film Processor Advance",
            machinelength: 1,
            capacity: 0,
            colors: 0,
            type: 'Sheets'
        },
        {
            name: "3)Plate Exposer",
            machinelength: 1,
            capacity: 0,
            colors: 0,
            type: 'Sheets'
        }
        ,
        {
            name: "4)Plate Processor 3M VKING",
            machinelength: 1,
            capacity: 0,
            colors: 0,
            type: ''
        }],id: 12},
        { details: 'Pinning and Binding Machine',
        items: [{
            name: "1)Pinning Machine - Harbhajan",
            machinelength: 3,
            capacity: 0,
            colors: 0,
            type: ''
        },
        {
            name: "2)Spine Tapping Machine",
            machinelength: 2,
            capacity: 0,
            colors: 0,
            type: ''
        }],id: 13},
        { details: 'Packing Machine',
        items: [{
            name: "1)Shrink Wrapping machine",
            machinelength: 2,
            capacity: 0,
            colors: 0,
            type: ''
        },
        {
            name: "2)Box Strapping machine",
            machinelength: 2,
            capacity: 0,
            colors: 0,
            type: ''
        }],id: 14},    
]