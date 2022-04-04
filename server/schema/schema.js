const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema } = graphql;

let states = [
    { name: 'Alabama', id:"1"},
    { name: 'Alaska', id:"2"},
    { name: 'Arkansas', id:"3"},
    { name: 'Arizona', id:"4"},
    { name: 'California', id:"5"},
    { name: 'Colorado', id:"6"},
    { name: 'Connecticut', id:"7"},
    { name: 'District of Columbia', id:"8"},
    { name: 'Delaware', id:"9"},
    { name: 'Florida', id:"10"},
    { name: 'Georgia', id:"11"},
    { name: 'Hawaii', id:"12"},
    { name: 'Iowa', id:"13"},
    { name: 'Idaho', id:"14"},
    { name: 'Illinois', id:"15"},
    { name: 'Indiana', id:"16"},
    { name: 'Kansas', id:"17"},
    { name: 'Kentucky', id:"18"},
    { name: 'Louisiana', id:"19"},
    { name: 'Massachusetts', id:"20"},
    { name: 'Maryland', id:"21"},
    { name: 'Maine', id:"22"},
    { name: 'Michigan', id:"23"},
    { name: 'Minnesota', id:"24"},
    { name: 'Missouri', id:"25"},
    { name: 'Mississippi', id:"26"},
    { name: 'Montana', id:"27"},
    { name: 'North Carolina', id:"28"},
    { name: 'North Dakota', id:"29"},
    { name: 'Nebraska', id:"30"},
    { name: 'New Hampshire', id:"31"},
    { name: 'New Jersey', id:"32"},
    { name: 'New Mexico', id:"33"},
    { name: 'Nevada', id:"34"},
    { name: 'New York', id:"35"},
    { name: 'Ohio', id:"36"},
    { name: 'Oklahoma', id:"37"},
    { name: 'Oregon', id:"38"},
    { name: 'Pennsylvania', id:"39"},
    { name: 'Puerto Rico', id:"40"},
    { name: 'Rhode Island', id:"41"},
    { name: 'South Carolina', id:"42"},
    { name: 'South Dakota', id:"43"},
    { name: 'Tennessee', id:"44"},
    { name: 'Texas', id:"45"},
    { name: 'Utah', id:"46"},
    { name: 'Virginia', id:"47"},
    { name: 'Vermont', id:"48"},
    { name: 'Washington', id:"49"},
    { name: 'Wisconsin', id:"50"},
    { name: 'West Virginia', id:"51"},
    { name: 'Wyoming', id:"52"},
];

const StateType = new GraphQLObjectType({
    name: 'State',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        status: {
            type: GraphQLString,
            resolve(parent, args){
                return "Welcome to GraphQL"
            }
        },
        states: {
            type: new GraphQLList(StateType),
            args: {text:{type:GraphQLString}},
            resolve(parent,args){
                return states.filter((state)=>state.name.toLowerCase().startsWith(args.text.toLowerCase()))
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
    //mutation for update
});


