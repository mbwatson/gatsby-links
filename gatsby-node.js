exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
        type PeopleYaml implements Node {
            teams: [TeamsYaml] @link(by: "members.id", from: "id")
        }
    `
    createTypes(typeDefs)
}
